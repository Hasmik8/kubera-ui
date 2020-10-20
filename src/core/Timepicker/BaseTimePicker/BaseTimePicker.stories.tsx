import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../../utils/storybook';
import { BaseTimePicker } from './BaseTimePicker';

storiesOf('TimePicker/Basic TimePicker', module)
  // Litmus Portal
  .add('Litmus Portal', () => (
    <ThemedBackground platform="litmus-portal" row>
      <BaseTimePicker onChange={() => console.log('timepicker')} />
    </ThemedBackground>
  ))

  // Kubera Chaos
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos" row>
      <BaseTimePicker onChange={() => console.log('timepicker')} />
    </ThemedBackground>
  ))

  // Kubera Propel
  .add('Kubera Propel', () => (
    <ThemedBackground platform="kubera-propel" row>
      <BaseTimePicker onChange={() => console.log('timepicker')} />
    </ThemedBackground>
  ))

  // Kubera Portal
  .add('Kubera Portal', () => (
    <ThemedBackground platform="kubera-portal" row>
      <BaseTimePicker onChange={() => console.log('timepicker')} />
    </ThemedBackground>
  ))

  // Kubera Core
  .add('Kubera Core', () => (
    <ThemedBackground platform="kubera-core" row>
      <BaseTimePicker onChange={() => console.log('timepicker')} />
    </ThemedBackground>
  ));
