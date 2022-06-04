import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Authors from "../components/authors/Authors";
import Books from "./books/Books";
import {IAuthor, SelectAuthorOption} from "../types/libraryTypes";

const ReadingArea: React.FC = () => {
    const [authorSelectOptions, setAuthorSelectOptions] = useState<SelectAuthorOption[] | null>(null)

    const authorArrayToSelect = (authors: IAuthor[]) => {
        for (let i = 0; i < authors.length; i++) {
            const authorOptions: SelectAuthorOption[] = authorSelectOptions ? authorSelectOptions.slice() : [];
            authorOptions.push({value: authors[i], label: authors[i].name});
            setAuthorSelectOptions(authorOptions);
        }
    }

    return (
        <Container fluid>
            <Row>
                <Col md={{span: 6, order: 1}} xs={{span: 12, order: 2}} className='px-xl-4 px-lg-4 px-2'>
                    <Books authorNameArray={authorSelectOptions ? authorSelectOptions : []}/>
                </Col>

                <Col md={{span: 6, order: 2}} xs={{span: 12, order: 1}} className='px-xl-4 px-lg-4 px-2'>
                    <Authors authorArrayToSelect={authorArrayToSelect}/>
                </Col>
            </Row>
        </Container>
    );
}

export default ReadingArea;