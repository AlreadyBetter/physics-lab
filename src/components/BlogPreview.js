import React, { Component } from 'react'
import { Container,  Media } from 'react-bootstrap'

export default class BlogPreview extends Component {
    render() {
        return (
            <Container>
                <Media className="m-5">
                    <img
                        width={150}
                        height={150}
                        className="mr-3"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                    />
                    <Media.Body>
                        <h5>Blog post</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nostrum nihil ex, expedita maxime doloribus eius soluta non ea odit quos! Odio natus vel laboriosam eaque architecto, voluptatibus blanditiis. Facere.</p>
                    </Media.Body>
                </Media>  
            </Container>
        )
    }
}
