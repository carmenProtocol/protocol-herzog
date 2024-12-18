import styled from 'styled-components';

const LogContainer = styled.pre`
  margin: 2rem 0;
  color: var(--text-color);
`;

interface Activity {
  time: string;
  action: string;
  details: string;
}

export const ActivityLog = ({ activities }: { activities: Activity[] }) => (
  <LogContainer>
{`Recent Activity ----------
${activities.map(activity => 
  `[${activity.time}] ${activity.action}: ${activity.details}`
).join('\n')}`}
  </LogContainer>
); 