// https://plainenglish.io/blog/how-to-use-react-fc-children-prop-in-react-18-with-typescript-6ab7b2c901ce#but-what-if-i-want-to-keep-the-old-reactfc-with-children-behavior


import * as React from '@types/react';
declare module 'react' {
  interface FunctionComponent<P = unknown> {
    (props: PropsWithChildren<P>, context?: unknown): ReactElement<unknown, unknown> | null;
  }
}
