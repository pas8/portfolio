import { FC, useRef, useEffect } from 'react';
import { TipsContext } from 'layouts/TipsLayout';
import { HandleAddTipElementType } from 'models/types';
import { useEffectOnce } from 'react-use';
import { Grid } from '@material-ui/core';

const TipElementWrapper: FC<{ title: string; id: string }> = ({ children, title, id }) => {
  return (
    <Grid id={id}>
      <TipsContext.Consumer>
        {({ handleAddTipElement }) => {
          return (
            <Container handleAddTipElement={handleAddTipElement} title={title} id={id}>
              {children}
            </Container>
          );
        }}
      </TipsContext.Consumer>
    </Grid>
  );
};

const Container: FC<{ handleAddTipElement: HandleAddTipElementType; title: string; id: string }> = ({
  children,
  id,
  handleAddTipElement,
  title
}) => {
  useEffectOnce(() => {
    handleAddTipElement({ element: children, title, id });
  });

  return <>{children}</>;
};
export default TipElementWrapper;
