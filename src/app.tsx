import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { Layout } from './client/components'
import { App } from './client/App'
import * as result from './resume.json'

const resume = result as any
const styles = require('./client/style.css').toString()

const Page = Layout({
    title: new Date().getFullYear() + ' 張瑀的個人履歷',
    body: renderToStaticMarkup(<App />),
    styles: styles,
    description: resume.basics.description,
})

var fs = require('fs')

fs.writeFile('./index.html', Page, function(err) {
    if (err) {
        return console.log(err)
    }

    console.log('The file was saved!')
})
