import { config } from './config';

!firebase.apps.length && firebase.initializeApp(config);