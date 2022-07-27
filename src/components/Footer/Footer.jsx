import React from "react";
import { TextField } from "@mui/material";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-1">
        <div className="contact">
          <span>
            <b>Contact</b>
          </span>
          <div className="contact-info">
            <div className="contact-info-item">
              <i className="fa-solid fa-envelope"></i>
              <div>Email: </div>
            </div>
            <div className="contact-info-item">
              <i className="fa-solid fa-phone"></i>
              <div>Phone number: </div>
            </div>
          </div>
          <div className="image-list">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-solid fa-play"></i>
            <i className="fa-brands fa-spotify"></i>
            <i className="fa-solid fa-podcast"></i>
            <i className="fa-brands fa-tiktok"></i>
          </div>
        </div>
        <div className="ask">
          <span>
            <b>Ask me anything</b>
          </span>
          <form>
            <TextField label="Full Name" variant="standard" fullWidth margin="normal" InputLabelProps={{ style: { fontFamily: "Montserrat" } }}/>
            <br />
            <TextField label="Your Email" variant="standard" fullWidth margin="normal" InputLabelProps={{ style: { fontFamily: "Montserrat"} }}/>
            <br />
            <TextField label="Your Message" variant="standard" fullWidth margin="normal"  InputLabelProps={{ style: { fontFamily: "Montserrat" } }}/>
            <input type="submit" value="SEND MESSAGE" className="ask-button" />
          </form>
        </div>
      </div>
      <div className="footer-2">
        2022, NCT Empowerment Network All Right Reserved.
      </div>
    </div>
  );
}
