import { useState } from 'react';
import styled from 'styled-components';
import { FundingData, TableProps } from '../types';

const TableContainer = styled.div`
  /* Simple container without decorative borders */
  margin: 2rem 0;
`;

const TableHeader = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Table = styled.table`
  /* Table header indicators */
  th {
    &[aria-sort] {
      cursor: pointer;
      
      &::after {
        content: "▼";
        visibility: hidden;
        margin-left: 0.5rem;
      }
    }

    &[aria-sort="ascending"]::after {
      visibility: visible;
      content: "▼";
    }

    &[aria-sort="descending"]::after {
      visibility: visible;
      content: "▲";
    }
  }
`;

const StatusIndicator = styled.span<{ status: FundingData['status'] }>`
  /* Simple text-based status indicators */
  &::before { content: "[ "; }
  &::after { content: " ]"; }

  ${({ status }) => {
    switch (status) {
      case 'completed':
        return 'font-weight: bold;';
      case 'pending':
        return 'font-style: italic;';
      case 'failed':
        return 'text-decoration: line-through;';
      default:
        return '';
    }
  }}
`;

export const FundingTable: React.FC<TableProps> = ({ data = [], onSort }) => {
  const [sortBy, setSortBy] = useState<keyof FundingData | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const sortColumn = (col: keyof FundingData) => {
    if (sortBy === col) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(col);
      setSortDirection('asc');
    }
    onSort?.(col);
  };

  const sortedData = [...data].sort((a, b) => {
    const modifier = sortDirection === 'asc' ? 1 : -1;
    return a[sortBy] > b[sortBy] ? modifier : -modifier;
  });

  return (
    <TableContainer>
      <TableHeader>
        FUNDING RECORDS
        ---------------
      </TableHeader>
      <Table>
        <thead>
          <tr>
            <th onClick={() => sortColumn('date')}>Date</th>
            <th onClick={() => sortColumn('amount')}>Amount</th>
            <th onClick={() => sortColumn('status')}>Status</th>
            <th onClick={() => sortColumn('description')}>Description</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
            <tr key={item.id}>
              <td>{new Date(item.date).toLocaleDateString()}</td>
              <td>$ {item.amount.toFixed(2)}</td>
              <td>
                <StatusIndicator status={item.status}>
                  {item.status.toUpperCase()}
                </StatusIndicator>
              </td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};
