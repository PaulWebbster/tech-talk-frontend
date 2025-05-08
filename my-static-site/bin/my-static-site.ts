#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MyStaticSiteStack } from '../lib/my-static-site-stack';

const app = new cdk.App();
new MyStaticSiteStack(app, 'MyStaticSiteStack', {
  env: { account: '585994675900', region: 'eu-west-1' },
});