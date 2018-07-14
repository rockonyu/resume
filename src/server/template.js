import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Layout from '../client/components/Layout';
import decode from 'unescape';

const html = renderToStaticMarkup(
  <Layout title='666' body='' styles='' />
);

module.exports = decode(html);