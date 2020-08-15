import React from "react"
import { Route } from "react-router-dom";

function About() {
    return (
        <Route>
            <body>
           <main class="container bg-light" id="main">
        <div class="row">
            
            <div class="col-sm-6" id="aboutImg">
                <h2>About</h2>
                <hr />
                <img src="IMG_0895.JPG" height="50%" alt="A photo of me" id="derek" />
            </div>
            <div class="col-sm-6" id="aboutMe">
                <p>Hello world! My name is Derek D'Esposito. I was born and raised in Florida and graduated from the
                    University of South Florida in Tampa.</p>
                <p>After graduation I dove right into real estate where I spent about one year before deciding to leave
                    the country on a cultural journey to Korea Republic (South).</p>
                <p>In Korea Republic, I lived in the beautiful city of Seoul for nearly two years. I got to experience
                    delicious cuisine, meet amazing new friends, see breath-taking sites, and really just dive deep into
                    a truly wonderful culture.</p>
                <p>Once I moved back home to Florida, I decided to pursue knowledge in the field of Web Development. I'm
                    now studying in the University of Central Florida's Web Development Boot Camp. I think being able to
                    code and program will allow me to express my own creativity through new platforms. To those reading,
                    I hope your looking forward to all the thing yet to come from me in this field. Every piece of work
                    I deliver will carry with it an expression of my creativity and personality. I'm excited for this
                    journey!</p>
                <p>Feel free to contact me anytime.
                    <a href="https://www.linkedin.com/in/derek-d-esposito-b990b21b2/">LinkedIn</a>
                    <a href="https://github.com/Derekdespo">GitHub</a>
                </p>


            </div>
           
        </div>
    </main>
    </body>
        </Route>
    )
}

export default About;