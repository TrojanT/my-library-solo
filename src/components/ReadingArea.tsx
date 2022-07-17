import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Authors from "../components/authors/Authors";
import Books from "./books/Books";
import {IAuthor, SelectAuthorOption} from "../types/libraryTypes";

const ReadingArea: React.FC = () => {
    const [authorSelectOptions, setAuthorSelectOptions] = useState<SelectAuthorOption[] | null>(null)
    const [authorsList, setAuthorsList] = useState<IAuthor[] | null>(null);

    const authorArrayToSelect = (authors: IAuthor[]) => {
        setAuthorsList(authors);
    }

    useEffect(() =>{
        if (!authorsList) {
            return;
        }

        const authorOptions: SelectAuthorOption[] = authorSelectOptions ? authorSelectOptions.slice() : [];
        authorOptions.splice(0,authorOptions.length)
        for (let i = 0; i < authorsList.length; i++) {
            authorOptions.push({value: authorsList[i], label: authorsList[i].name});
            setAuthorSelectOptions(authorOptions);
        }
    }, [authorsList]);

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