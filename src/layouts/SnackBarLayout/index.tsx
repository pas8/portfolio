import { FC, } from 'react';
import { SnackbarProvider } from 'notistack';



const SnackBarLayout: FC = ({ children }) => {


  return <SnackbarProvider>{children}</SnackbarProvider>;
};

export default SnackBarLayout;
