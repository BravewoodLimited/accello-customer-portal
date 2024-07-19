import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Faq() {
  return (
    <>
      <Typography className="text-4xl font-extrabold  mb-12 text-center ">
        Frequently Asked Questions
      </Typography>

      <div className="grid md:grid-cols-2 gap-2 md:gap-5 p-5 ">
        <div className="flex flex-col gap-2">
          {[
            {
              title: "What is Accello",
              description:
                " Accello offers quick and ease to access loans to meet urgent needs at competitive interest rates.",
            },
            {
              title: "What are the types of loans you give?",
              description:
                "We currently grant quick short-term personal loans.",
            },

            {
              title: "Who is eligible to request?",
              description:
                "Anyone who is over 18 years and has a valid Nigerian bank account",
            },
            {
              title: "How can i get a loan?",
              description:
                "The loan decision process is completed within a few minutes of successfully submitting a loan application and its requirements.",
            },
            {
              title: "What is the maximum amount i can get?",
              description:
                "The amounts that can be accessed at any time depend on the applicant's income level, employment type and need.",
            },
            {
              title: "What is the loan tenure?",
              description:
                "Our loan tenor ranges from 1 month to 12 months. However, loan tenures are based on credit reviews, credit scores and employment status.",
            },

            {
              title: "What are the loan requirements?",
              description: (
                <ul className="list-disc p-5">
                  <li>Must be a Civil Servant (Federal)</li>
                  <li>Must be between 25 - 59 years of age</li>
                  <li>Must be a legal resident of Nigeria</li>

                  <br />
                  <p>DOCUMENTS REQUIRED</p>
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
              ),
            },
          ].map(({ title, description }) => (
            <Accordion key={title} className="group">
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon className=" group-hover:text-white" />}
                aria-controls="faq1-content"
                id="faq1-header"
                className="group-hover:bg-[#04265F] group-hover:text-white"
              >
                <Typography variant="h6" className="font-bold">
                  {title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-text-secondary">
                  {description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {[
            {
              title: "What is a loan offer?",
              description:
                "A loan offer is an estimate of the amount of funds Accello can grant you based on your creditworthiness. We make you that offer with the understanding that you can easily and conveniently repay that amount within the stipulated tenure. You reserve the right to accept, modify or reject a loan offer if it does not meet your financial needs.",
            },
            {
              title: "How do I repay?",
              description: (
                <div>
                  <p>There are a few options all subject to your status</p>
                  <ol className="list-decimal p-5">
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
                </div>
              ),
            },
            {
              title: "What is the intrest rate?",
              description:
                "Up to a maximum of 4% flat per month, subject to your credit score",
            },
            {
              title: "Are there any charges?",
              description:
                "Yes, there are charges. Though we do not charge interest, we charge monthly flat Upfees There is loan admin. and service charge of 2.5%.",
            },
            {
              title: "What happens if I default?",
              description:
                "Let us establish that defaulting on loans is a criminal offense under the law of the land. However, we will work with you to resolve your financial problem and put you back on a more stable financial ground",
            },

            {
              title: "Pre-payment penalties?",
              description:
                "We do not naturally penalize you for pre-payment, however, the number of instalments paid and the consistency of repayment determine whether we apply charges",
            },
            {
              title: "Can I get a loan from anywhere in Nigeria?",
              description:
                "Absolutely! We are everywhere there is internet access and the law of Nigeria governs.",
            },
          ].map(({ title, description }) => (
            <Accordion key={title} className="group">
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon className=" group-hover:text-white" />}
                aria-controls="faq1-content"
                id="faq1-header"
                className="group-hover:bg-[#04265F] group-hover:text-white"
              >
                <Typography variant="h6" className="font-bold">
                  {title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-text-secondary">
                  {description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
}

export default Faq;

export const Component = Faq;
