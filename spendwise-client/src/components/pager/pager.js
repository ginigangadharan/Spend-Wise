import React, { Fragment, Component } from "react";

export default class Pager extends Component {

    constructor(props) {
        super(props);
    }

    togglePrevious = (e) => {
        e.preventDefault();
        let PrevPage;
        if (parseInt(this.props.page) > 1) {
            PrevPage = parseInt(this.props.page) - 1;
            this.props.pageUpdate(PrevPage);
        }
    }

    toggleNext = (e) => {
        e.preventDefault();
        let NextPage;
        if (parseInt(this.props.page) < parseInt(this.props.totalPages)) {
            NextPage = parseInt(this.props.page) + 1;
            this.props.pageUpdate(NextPage);
        }
    }

    selectPage = e => {
        e.preventDefault();
        this.props.pageUpdate(e.currentTarget.value);
    }

    render() {
        let page = [];
        let paginationComponent;
        let className;
        for (var i = 1; i <= this.props.totalPages; i++) {
            page.push(i);
        }
        paginationComponent = (
            <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <a className="page-link" href="#" onClick={this.togglePrevious}>Previous</a>
                        </li>
                        {page.map((pages) => {
                            if (parseInt(pages) === parseInt(this.props.page)) {
                                className = "page-item active";
                            } else {
                                className = "page-item"
                            }
                            return (
                                <li onClick={this.selectPage} className={className} key={pages} value={pages}><a className="page-link" value={pages} href="#">{pages}</a></li>
                            );
                        })}
                        <li className="page-item">
                            <a className="page-link" href="#" onClick={this.toggleNext}>Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
        return (
            <Fragment>
                {paginationComponent}
            </Fragment>
        )
    }
}