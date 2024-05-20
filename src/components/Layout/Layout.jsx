import s from './Layout.module.css';

export const Layout = ({ children }) => {
  return <main className={s.container}>{children}</main>;
};
