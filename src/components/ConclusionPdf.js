import React, { Component } from 'react'
import { Page, Text, Document, Font } from '@react-pdf/renderer';
import { generalKz } from '../recources/labData';

export default class ConclusionPdf extends Component {
    render() {
        Font.register({
            family: "Roboto",
            src:
                "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf"
        });

        const styles = {
            body: {
                paddingTop: 35,
                paddingBottom: 65,
                paddingHorizontal: 35,
            },
            title: {
                fontSize: 24,
                textAlign: 'center',
                fontFamily: 'Roboto'
            },
            author: {
                fontSize: 12,
                textAlign: 'center',
                marginBottom: 40,
                fontFamily: 'Roboto'
            },
            subtitle: {
                fontSize: 18,
                margin: 12,
                fontFamily: 'Roboto'
            },
            text: {
                margin: 12,
                fontSize: 14,
                textAlign: 'justify',
                fontFamily: 'Roboto'
            },
            image: {
                marginVertical: 15,
                marginHorizontal: 100,
            },
            header: {
                fontSize: 12,
                marginBottom: 20,
                textAlign: 'center',
                color: 'grey',
            },
            pageNumber: {
                position: 'absolute',
                fontSize: 12,
                bottom: 30,
                left: 0,
                right: 0,
                textAlign: 'center',
                color: 'grey',
            },
        }
        return (
            <Document>
                <Page size="A4" style={styles.body}>
                    <Text style={styles.title}>{generalKz.conslusion}</Text>
                    <Text style={styles.author}>{this.props.data.fio}</Text>
                    <Text style={styles.text}>{this.props.data.conclusion}</Text>
                </Page>
            </Document>
        )
    }
}
