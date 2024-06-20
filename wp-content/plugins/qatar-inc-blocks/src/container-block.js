import { UTILS } from './utils';

export const ContainerBlock = ({ title, children }) => {
  return (
    <div className={UTILS.CONTAINER}>
      <h2 className={UTILS.TITLE}>{title}</h2>
      <div className={UTILS.WRAPPER}>{children}</div>
    </div>
  );
};
