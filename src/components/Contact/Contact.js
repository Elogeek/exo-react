import './Contact.css';
import {useState} from "react";

export const Contact = function () {

    const [subject, setSubject] = useState('Sujet');
    const [message, setMessage] = useState("Message");

    return(
        <div className="contact_form">

            <div>
                <label htmlFor="contact_subject">Subjet: </label>
                <input type="text"
                       name="message_subject"
                       value={subject}
                       onChange={e => setSubject(e.target.value)}
                />
                {subject.length < 6 &&
                    <div>
                        <p className="errors">Le champs sujet doit comporter au min 6 caractères</p>
                    </div>
                }
            </div>
            <div>
                <label htmlFor="contact_message">Message: </label>
                <textarea name="contact_message"
                          cols="30"
                          value={message}
                          rows="5"
                          onChange={e =>setMessage(e.target.value)}
                />
            </div>

        </div>
    )
}