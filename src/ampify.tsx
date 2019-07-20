import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Layout } from './client/components';
import { App } from './client/App';
import * as result from '../public/resume.json';
import { ServerStyleSheet } from 'styled-components';
import * as fs from 'fs';

const resume = result as any;
const sheet = new ServerStyleSheet();

const html = renderToStaticMarkup(sheet.collectStyles(<App />));
const styleTags = sheet.getStyleTags().replace('<style', '<style amp-custom');

const Page = Layout({
    title: new Date().getFullYear() + ' 張瑀的個人履歷',
    body: html,
    styles: styleTags,
    description: resume.basics.description,
});

fs.writeFile('./index.html', Page, function(err) {
    if (err) {
        return console.log(err);
    }

    console.log('The file was saved!');
});
