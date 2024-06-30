import { useState } from "react";
import {
  // ContactWrapper,

  ContactInfo,
  AditionalInfo,
  AditionalInfoLink,
  SocialMedia,
  WorkingHours,
  PrivacyPolicy,
  PrivacyPolicyLink,
  ContactForm,
  FormLabel,
  FormInput,
  FormTextArea,
  FormButton,
  SocialMediaList,
  SocialMediaListItem,
  SocialMediaLink,
  ContactContainer,
  CardContact1,
  CardContact2,
} from "../Contacts/Contacts.style";
import "boxicons";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Achiziție bilete",
    message: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setMessage("Successful message sent");

    // Reset the form
    setFormData({
      name: "",
      email: "",
      subject: "Achiziție bilete",
      message: "",
    });

    // Optionally clear the success message after a few seconds
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <ContactContainer>
      <CardContact1>
        <h1>Contact us</h1>

        <ContactInfo>
          <p>
            <strong>Email:</strong> contact@eventsfusion.com
          </p>
          <p>
            <strong>Phone:</strong> +40 123 456 789
          </p>
          <p>
            <strong>Address:</strong> 10 Bujorilor street, București, România
          </p>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <FormLabel>
            Name:
            <FormInput
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormLabel>
          <FormLabel>
            Email:
            <FormInput
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormLabel>
          <FormLabel>
            Subject:
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            >
              <option value="Achiziție bilete">Purchase tickets</option>
              <option value="Probleme tehnice">Technical issues</option>
              <option value="Alte întrebări">Other questions</option>
            </select>
          </FormLabel>
          <FormLabel>
            Message:
            <FormTextArea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </FormLabel>
          <FormButton type="submit">Send</FormButton>
          {message && <p>{message}</p>}
        </ContactForm>
      </CardContact1>

      <CardContact2>
        <AditionalInfo>
          <h2>Suport</h2>
          <ul>
            <li>
              <AditionalInfoLink>FAQ</AditionalInfoLink>
            </li>
            <li>
              <AditionalInfoLink>Technical Asistence</AditionalInfoLink>
            </li>
          </ul>
        </AditionalInfo>

        <SocialMedia>
          <h2>Follow Us on Social Media</h2>
          <SocialMediaList>
            <SocialMediaListItem>
              <SocialMediaLink
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <box-icon type="logo" name="facebook"></box-icon>
              </SocialMediaLink>
            </SocialMediaListItem>
            <SocialMediaListItem>
              <SocialMediaLink
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <box-icon name="twitter" type="logo"></box-icon>
              </SocialMediaLink>
            </SocialMediaListItem>
            <SocialMediaListItem>
              <SocialMediaLink
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <box-icon name="instagram-alt" type="logo"></box-icon>
              </SocialMediaLink>
            </SocialMediaListItem>
          </SocialMediaList>
        </SocialMedia>

        <WorkingHours>
          <h2>Work program</h2>
          <p>Monday - Friday: 09:00 - 18:00</p>
          <p>Saturday: 10:00 - 14:00</p>
        </WorkingHours>

        <PrivacyPolicy>
          <h2>Privacy Policy</h2>
          <PrivacyPolicyLink>Read more</PrivacyPolicyLink>
        </PrivacyPolicy>
      </CardContact2>
    </ContactContainer>
  );
};

export default Contacts;
