import React from 'react'
import { storiesOf } from '@storybook/react'

import LogoHeading from './'

storiesOf('LogoHeading', module).add('default', () => (
    <LogoHeading text="Welcome back! Please login to your account."/>
))