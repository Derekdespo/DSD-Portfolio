import React from "react"

function Contact() {
    return (
        <div class="container bg-light" id="input-form">
            <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-8">

                    <h2>Contact</h2>
                    <hr />
                        <form>

                            <div class="form-group">
                                <label for="exampleFormControlInput1">Name</label>
                                <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="your name" />
                            </div>

                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                    placeholder="name@example.com" />
                            </div>

                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Send me a message!</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <div class="form-group">
                                <a href="mailto:derekdespo@icloud.com" class="btn btn-secondary btn-lg active" role="button"
                                    aria-pressed="true">Send</a>

                            </div>
                        </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;