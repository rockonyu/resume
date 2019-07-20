import * as React from 'react'
import styled from 'styled-components'

const AsideSection = styled.div`
    text-align: left;
    background-color: #ececec;
    padding-bottom: 50px;
`
const Container = styled.div`
    margin: 0 auto;
    padding: 0 1.5rem;
    max-width: 820px;
`
const Title = styled.h3`
    margin-bottom: 0;
    border-bottom: solid 1px #2f393b;
    padding-bottom: 0.5em;
    padding-top: 1em;
    letter-spacing: 5px;
`
const ContactList = styled.ul`
    margin-top: 0;
    list-style: none;
    padding: 0;
`
const ContactItem = styled.li`
    border-bottom: solid 1px #2f393b;
    padding: 0.5em 0;
`
const Label = styled.span`
    display: inline-block;
    word-wrap: break-word;
    width: 120px;
    font-weight: 600;

    @media (max-width: 767px) {
        display: block;
        width: auto;
    }
`
const Field = styled.span`
    display: inline-block;
    word-wrap: break-word;

    @media (max-width: 767px) {
        display: block;
        width: auto;
    }
`
const Link = styled.a`
    text-decoration: none;
    color: #2f393b;
`

const Aside = ({
    name,
    enname,
    mobile,
    email,
    linkedin,
    languages,
    profiles,
}) => (
    <AsideSection>
        <Container>
            <Title>CONTACT</Title>
            <ContactList>
                <ContactItem>
                    <Label>Name</Label>
                    <Field>{name + ' ' + enname}</Field>
                </ContactItem>
                <ContactItem>
                    <Label>Mobile</Label>
                    <Field>{mobile}</Field>
                </ContactItem>
                <ContactItem>
                    <Label>Email</Label>
                    <Field>
                        <Link href={'mailto:' + email}>{email}</Link>
                    </Field>
                </ContactItem>
                <ContactItem>
                    <Label>LinkedIn</Label>
                    <Field>
                        <Link href={linkedin} target="_blank">
                            {linkedin}
                        </Link>
                    </Field>
                </ContactItem>
            </ContactList>
        </Container>
    </AsideSection>
)

export default Aside
