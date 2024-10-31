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

  return (
    <div className="p-4 text-black bg-landingbackground" name="Faqs">
      <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-center mt-24">
        <h1 className="font-NexaBold text-[36px]">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="gap-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 justify-between mt-8 ">
        <div className="relative overflow-x-auto sm:flex flex-row md:gap-[50px]">
          <div className="md:w-1/2 font-NexaBold">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography
                  fontSize={22}
                  fontFamily={"NexaBold"}
                  fontWeight={600}
                
                  
                >
                  What is Accello?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography    className="font-NexaBold">
                  Accello offers quick and ease to access loans to meet urgent
                  needs at competitive interest rates.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography
                  fontSize={22}
                  fontFamily={"NexaBold"}
                  fontWeight={600}
                
                >
                  What are the types of loans you give?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We currently grant quick short-term personal loans.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography
                  fontSize={22}
                 fontFamily={"NexaBold"}
                  fontWeight={600}
                >
                  Who is eligible to request?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Anyone who is over 18 years and has a valid Nigerian bank
                  account
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography
                  fontSize={22}
                 fontFamily={"NexaBold"}
                  fontWeight={600}
                >
                  How can I get a loan?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The loan decision process is completed within a few minutes of
                  successfully submitting a loan application and its
                  requirements.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography
                  fontSize={22}
                 fontFamily={"NexaBold"}
                  fontWeight={600}
                >
                  What is the maximum amount I can get?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The amounts that can be accessed at any time depend on the
                  applicant's income level, employment type and need.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography
                  fontSize={22}
                 fontFamily={"NexaBold"}
                  fontWeight={600}
                >
                  What is the loan tenure?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Our loan tenor ranges from 1 month to 12 months. However, loan
                  tenures are based on credit reviews, credit scores and
                  employment status.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography
                  fontSize={22}
                 fontFamily={"NexaBold"}
                  fontWeight={600}
                >
                  What are the loan requirements?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul className="list-disc">
                    <li>Must be a Civil Servant (Federal)</li>
                    <li>Must be between 25 - 59 years of age</li>
                    <li>Must be a legal resident of Nigeria</li>
                    <br />
                    DOCUMENTS REQUIRED
                    <br />
                    <li>1 Passport Photograph</li>
                    <li>Staff Identity Card</li>
                    <li>
                      A valid means of Identification (Driver's license,
                      International passport or Voter's card)
                    </li>
                    <li>Employment / Promotion / Confirmation Letter</li>
                    <li>3 Months Stamped Recent Bank Statement</li>
                    <li>BVN - Bank Verification Number</li>
                    <li>3 Months Recent Payslip</li>
                    <li>Proof of address</li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="md:w-1/2 ">
            <Accordion
              expanded={expanded === "panel8"}
              onChange={handleChange("panel8")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography
                  fontSize={22}
                 fontFamily={"NexaBold"}
                  fontWeight={600}
                >
                  What is a loan offer?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  A loan offer is an estimate of the amount of funds Accello can
                  grant you based on your creditworthiness. We make you that
                  offer with the understanding that you can easily and
                  conveniently repay that amount within the stipulated tenure.
                  You reserve the right to accept, modify or reject a loan offer
                  if it does not meet your financial needs.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel9"}
              onChange={handleChange("panel9")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography
                  fontSize={22}
                 fontFamily={"NexaBold"}
                  fontWeight={600}
                >
                  How do I repay?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  There are a few options all subject to your status
                  <ol className="list-decimal">
                    <li>
                      Repayments can be set-off against your salary i.e
                      deduction at source. This is taken directly from your
                      employer.
                    </li>
                    <li>
                      You could set-up direct deduction on your bank account.
                    </li>
                    <li>
                      You put your credit card on file for recurring debit.
                    </li>
                  </ol>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel10"}
              onChange={handleChange("panel10")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography
                  fontSize={22}
                 fontFamily={"NexaBold"}
                  fontWeight={600}
                >
                  What is the interest rate?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Up to a maximum of 4% flat per month, subject to your credit
                  score
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel11"}
              onChange={handleChange("panel11")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography
                  fontSize={22}
                 fontFamily={"NexaBold"}
                  fontWeight={600}
                >
                  Are there any charges?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes, there are charges. Though we do not charge interest, we
                  charge monthly flat Upfees There is loan admin. and service
                  charge of 2.5%
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel12"}
              onChange={handleChange("panel12")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography
                  fontSize={22}
                 fontFamily={"NexaBold"}
                  fontWeight={600}
                >
                  What happens if I default?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Let us establish that defaulting on loans is a criminal
                  offense under the law of the land. However, we will work with
                  you to resolve your financial problem and put you back on a
                  more stable financial ground
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel13"}
              onChange={handleChange("panel13")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography
                  fontSize={22}
                 fontFamily={"NexaBold"}
                  fontWeight={600}
                >
                  Pre-payment penalties?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We do not naturally penalize you for pre-payment, however, the
                  number of instalments paid and the consistency of repayment
                  determine whether we apply charges
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel14"}
              onChange={handleChange("panel14")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography
                  fontSize={22}
                 fontFamily={"NexaBold"}
                  fontWeight={600}
                >
                  Can I get a loan from anywhere in Nigeria?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Absolutely! We are everywhere there is internet access and the
                  law of Nigeria governs.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>

      {/* <hr className='mx-auto max-w-7xl my-16'/> */}
    </div>
  );
}

export default Faqs;
