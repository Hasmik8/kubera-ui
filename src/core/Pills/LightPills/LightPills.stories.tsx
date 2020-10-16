import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../../utils/storybook';
import { LightPills } from '../LightPills';

storiesOf('Pills/Light Pills', module)
  // Litmus Portal
  .add('Litmus Portal', () => (
    <ThemedBackground platform="litmus-portal" row>
      <LightPills variant="success">Success</LightPills>
      <LightPills variant="warning">Warning</LightPills>
      <LightPills variant="danger">Danger</LightPills>
    </ThemedBackground>
  ))

  // Kubera Chaos
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos" row>
      <LightPills variant="success">Success</LightPills>
      <LightPills variant="warning">Warning</LightPills>
      <LightPills variant="danger">Danger</LightPills>
    </ThemedBackground>
  ))

  // Kubera Propel
  .add('Kubera Propel', () => (
    <ThemedBackground platform="kubera-propel" row>
      <LightPills variant="success">Success</LightPills>
      <LightPills variant="warning">Warning</LightPills>
      <LightPills variant="danger">Danger</LightPills>
    </ThemedBackground>
  ));