import React from 'react';
import Content from '../components/Content'
import workExamples from "../workExamples"

const contentControl = () => {
    return (
        <div>

            <header>
                <h1>Content Control</h1>
            </header>

            <div class="addContent">
                <div class="card-group">
                    <div class="card">
                        {/* <img src={props.Image} class="card-img-top" alt="..."></img> */}
                        <div class="card-body">
                            <input className="card-title" name="Title" placeholder="Title"/>
                            <textarea className="card-text"/>
                            <a href="#">
                                <button class="btn btn-primary">
                                    Add Content
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <dl className="dictionary">
                    {workExamples.map((wishes) => (
                        <Content
                            key={wishes.id}
                            Image={wishes.thumbnailImage}
                            Title={wishes.title}
                        // name={work.name}
                            Description={wishes.description}
                        />
                    ))}
                </dl>
            </div>

        </div>
    )
}

export default contentControl;