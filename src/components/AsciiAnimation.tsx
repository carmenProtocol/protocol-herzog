import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AnimationProps, AnimationType } from '../types';

const AnimationContainer = styled.pre`
  margin: 2rem 0;
  line-height: 1.2;
  min-height: 100px;
`;

const animations: Record<AnimationType, string[]> = {
  deposit: [
    `[    ] Initializing deposit...`,
    `[=   ] Validating input...`,
    `[==  ] Processing USDC transfer...`,
    `[=== ] Confirming transaction...`,
    `[====] Deposit confirmed.`,
  ],
  position: [
    `[    ] Preparing position setup...`,
    `[=   ] Allocating spot portion (80%)...`,
    `[==  ] Setting up perp position (20%)...`,
    `[=== ] Applying leverage (4x)...`,
    `[====] Position ready.`,
  ],
  success: [
    `[    ] Finalizing setup...`,
    `[=   ] Calculating yields...`,
    `[==  ] Verifying price levels...`,
    `[=== ] Generating report...`,
    `[====] Complete.`,
  ]
};

export const AsciiAnimation: React.FC<AnimationProps> = ({ type, isVisible }) => {
  const [frame, setFrame] = useState(0);
  const [output, setOutput] = useState<string[]>([]);

  useEffect(() => {
    if (!isVisible) {
      setOutput([]);
      setFrame(0);
      return;
    }

    const frames = animations[type];
    const interval = setInterval(() => {
      setFrame(current => {
        if (current >= frames.length - 1) {
          clearInterval(interval);
          return current;
        }
        return current + 1;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [type, isVisible]);

  useEffect(() => {
    if (isVisible) {
      setOutput(prev => [...prev, animations[type][frame]]);
    }
  }, [frame, type, isVisible]);

  if (!isVisible) return null;

  return (
    <AnimationContainer>
      {output.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </AnimationContainer>
  );
}; 