import { boxStyles } from './box.css';

export type BoxProps = {
  msg: string;
};

export function Box({ msg }: BoxProps): JSX.Element {
  return <div className={boxStyles}>{msg}</div>;
}
