import makeStyles from '@mui/styles/makeStyles';
import { Feature, FeatureId } from '@user-office-software-libs/shared-types';
import React from 'react';

import { useFeatures } from '../hooks/admin/useFeatures';

interface FeatureContextData {
  readonly features: Map<FeatureId, Feature>;
}

const useStyles = makeStyles({
  loader: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const initialFeatureData: FeatureContextData = {
  features: new Map<FeatureId, Feature>(),
};

export const FeatureContext =
  React.createContext<FeatureContextData>(initialFeatureData);

export const FeatureContextProvider: React.FC = (props) => {
  const { features, loadingFeatures } = useFeatures();
  const classes = useStyles();

  if (loadingFeatures) {
    return (
      <div className={classes.loader} data-cy="loading">
        Loading...
      </div>
    );
  }

  const featuresMap = features?.reduce(function (featuresMap, feature) {
    featuresMap.set(feature.id, feature);

    return featuresMap;
  }, new Map<FeatureId, Feature>());

  return (
    <FeatureContext.Provider value={{ features: featuresMap }}>
      {props.children}
    </FeatureContext.Provider>
  );
};
