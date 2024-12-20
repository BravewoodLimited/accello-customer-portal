import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "../../custom/SecondCustomAccordion";
import Typography from "@mui/material/Typography";

function Faqs(props) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // Array of FAQ items
  const faqItems = [
    {
      id: "panel1",
      question: "What does Accello mean?",
      answer:
        "Accello simply is Accelerated Loan, a product of Bravewood Finance Company Limited. We offer quick loan services to individuals in the public and private sectors.",
    },
    {
      id: "panel2",
      question: "What are the types of loans you give?",
      answer:
        "We provide personal loans to public and private sector individuals.",
    },
    {
      id: "panel3",
      question: "How can I get a loan?",
      answer:
        "To apply for a loan, simply sign up here (insert link) and complete your loan application or use any of our other channels (website link) or walk into a branch near you.",
    },
    {
      id: "panel4",
      question: "Who is eligible to request a loan?",
      answer:
        "You’re eligible to get a loan from us if you are 18 – 59 years old, have a verifiable source of income, live and/or work in Nigeria, and have a savings or current bank account with any commercial bank.",
    },
    {
      id: "panel5",
      question: "What are the loan requirements?",
      answer:
        "Must be a Civil Servant (Federal & State). Must be a salary earner. For public sector employees, you must be a civil servant (federal & State).",
    },
    {
      id: "panel6",
      question: "What is the minimum and maximum amount I can get?",
      answer:
        "The minimum amount you can get is 50,000 naira while the maximum amount is 5 million naira.",
    },
    {
      id: "panel7",
      question: "What is a loan tenor?",
      answer:
        "Your loan tenure is the period you want to service the loan. Our loan tenor ranges from 1 month to 36 months. However, loan tenures are based on credit reviews, credit scores, and employment status.",
    },
    {
      id: "panel8",
      question: "What is a loan offer?",
      answer:
        "A loan offer is an estimate of the amount of funds Accello can grant you based on your creditworthiness. We make you that offer with the understanding that you can easily and conveniently repay that amount within the stipulated tenure.",
    },
    {
      id: "panel9",
      question: "How do I repay?",
      answer: (
        <>
          There are a few options all subject to your status:
          <ul className="list-disc">
            <li>
              Repayments can be set off against your salary i.e. deduction at
              source. This is taken directly from your employer.
            </li>
            <li>You could set up a direct deduction on your bank account.</li>
            <li>You put your debit card on file for recurring debit.</li>
          </ul>
        </>
      ),
    },
    {
      id: "panel10",
      question: "What is the interest rate?",
      answer:
        "Up to a maximum of 3.75% per month, subject to change based on several factors.",
    },
    {
      id: "panel11",
      question: "Are there any charges?",
      answer: "Yes, there are charges. We take a one-off upfront charge of 2%.",
    },
    {
      id: "panel12",
      question: "How long does it take to review a loan?",
      answer:
        "The loan decision process is completed within a few minutes of successfully submitting a loan application and its requirements.",
    },
    {
      id: "panel13",
      question: "What happens if I default?",
      answer:
        "Defaulting on loans is a criminal offense under the law. However, we are committed to working with you to resolve your financial issues and help you regain stability.",
    },
    {
      id: "panel14",
      question: "Can I get a loan from anywhere in Nigeria?",
      answer:
        "Absolutely! We are everywhere, as long as you have internet access.",
    },
    {
      id: "panel15",
      question: "Can I Liquidate?",
      answer: "Yes, you can liquidate your loan at any time.",
    },
    {
      id: "panel16",
      question:
        "Can I take a loan that exceeds my Debt Service Ratio (DSR) and repay it alongside other deductions from source?",
      answer:
        "Currently, we cannot accommodate that. Loans must stay within the set DSR/DTI limits.",
    },
    {
      id: "panel17",
      question:
        "Can I use another person’s details in civil service since I am not a civil servant?",
      answer: "No, you can’t use details that are not yours to get a loan.",
    },
    {
      id: "panel18",
      question: "Can I get a loan as a pensioner?",
      answer: "No, because deductions are made directly from payment source.",
    },
    {
      id: "panel19",
      question: "Do I need collateral or guarantor to access a loan?",
      answer:
        "No, you don’t. Accello loans can be gotten without collateral or guarantors.",
    },
    {
      id: "panel20",
      question: "Must I come to the office?",
      answer:
        "No, you can conduct a full transaction online without coming into the office. However, if you need to, we have offices in Lagos, Abuja, and Ibadan.",
    },
    {
      id: "panel21",
      question: "What happens if I am over deducted?",
      answer:
        "This is highly unlikely. But if it does happen, please reach out to us through WhatsApp, social media or telephone and you will be refunded fully.",
    },
    {
      id: "panel22",
      question: "Can I get a loan on the weekend?",
      answer:
        "You can apply for a loan anytime, but disbursement will be done only during working hours.",
    },
    {
      id: "panel23",
      question: "How can I reach you?",
      answer:
        "Feel free to reach out to our dedicated customer support team at loans@accello.ng or call us at 07000222355 (calls) or 08107258837 (WhatsApp).",
    },
    {
      id: "panel24",
      question: "How am I sure you are not a fraud?",
      answer:
        "We are licensed by the CBN. You can verify by visiting our physical office addresses: No 56, Adeyi Avenue, Old Bodija, Ibadan; Ogun House, 74 Ralph Shodeinde Crescent Central Business District, Abuja; 2c, Ayo Rosiji Crescent, Off Oduduwa Crescent Ikeja GRA, Lagos.",
    },
    {
      id: "panel25",
      question: "Can I get my balance on the spot?",
      answer:
        "Yes, you can. Call any of our support lines or reach out to a loan officer.",
    },
    {
      id: "panel26",
      question:
        "Can I apply for a loan myself without the help of a loan officer?",
      answer:
        "Yes, you can apply for a loan by yourself through the website or customer portal.",
    },
    {
      id: "panel27",
      question: "Are there liquidation charges?",
      answer:
        "If your loan is between 1-3 months, you will be required to pay the total balance if you pre-liquidate, 8.25%. However, for loans of 4 months and above, mid-term, there won’t be charges.",
    },
    {
      id: "panel28",
      question:
        "What is the minimum year in service to be eligible for a loan?",
      answer:
        "6 months for federal/FCT government staff while 9 months for Lagos state staff.",
    },
    {
      id: "panel29",
      question: "Can I get a loan top up on my public sector loan?",
      answer: "Currently, our top-up service is unavailable.",
    },
    {
      id: "panel30",
      question: "Is your interest a flat rate or reducing balance rate?",
      answer: "Our interest rate at Accello is a flat rate.",
    },
    {
      id: "panel31",
      question: "What makes Accello different from other lenders?",
      answer:
        "At Accello, we have zero hidden charges, the cheapest rate, and 24/7 customer service. We’re here to serve you and ensure that your needs and financial goals are met.",
    },
    {
      id: "panel32",
      question: "What document do I need to apply for a loan?",
      answer: "Employment ID, BVN and a valid national ID.",
    },
    {
      id: "panel33",
      question: "Are there any hidden charges?",
      answer:
        "No hidden charges. All charges are stated clearly on a repayment.",
    },
    {
      id: "panel34",
      question: "How long does it take to process a loan?",
      answer: "It takes an average of 5 minutes.",
    },
    {
      id: "panel35",
      question: "Can my loan be rejected?",
      answer: "Yes, if you provide incorrect or insufficient information.",
    },
    {
      id: "panel36",
      question: "Can I have more than one loan running?",
      answer: "Currently, no you cannot. But you can offset and process another loan immediately ",
    },
    {
      id: "panel37",
      question: "Can I transfer money to my loan officer to help with liquidation? ",
      answer: "No. Please do not send any money to the loan officers directly. You can contact support for liquidation balance and pay directly to the company’s account.",
    },
    {
      id: "panel38",
      question: "Do I have to pay a loan officer before my loan can be processed?",
      answer: "No. We do not charge any amount to process a loan.",
    },
  ];

  return (
    <div className="p-4 text-black bg-landingbackground" name="Faqs">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-center mt-24">
        <h1 className="font-NexaBold text-[36px]">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="gap-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 justify-between mt-8">
        <div className="relative overflow-x-auto sm:flex flex-row md:gap-[50px]">
          <div className="md:w-1/2 font-NexaBold !rounded-lg">
            {faqItems
              .slice(0, Math.ceil(faqItems.length / 2))
              .map((faq, index) => (
                <Accordion
                  key={faq.id}
                  expanded={expanded === faq.id}
                  onChange={handleChange(faq.id)}
                >
                  <AccordionSummary
                    aria-controls={`${faq.id}-content`}
                    id={`${faq.id}-header`}
                  >
                    <Typography
                      fontSize={22}
                      fontFamily={"NexaLight"}
                      fontWeight={600}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{faq.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
          </div>

          <div className="md:w-1/2">
            {faqItems
              .slice(Math.ceil(faqItems.length / 2))
              .map((faq, index) => (
                <Accordion
                  key={faq.id}
                  expanded={expanded === faq.id}
                  onChange={handleChange(faq.id)}
                >
                  <AccordionSummary
                    aria-controls={`${faq.id}-content`}
                    id={`${faq.id}-header`}
                  >
                    <Typography
                      fontSize={22}
                      fontFamily={"NexaLight"}
                      fontWeight={600}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{faq.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
