import Typography from '@mui/material/Typography';
import blacklisted from '../../assets/imgs/loan-apply-blaclisted.png'


function LoanApplyBlacklisted() {
  return <>
  <div className='w-[320px]'>
    <Typography className='font-bold  text-lg mb-5'>
        Hi Toyese, you currently have a loan with us.
    </Typography>
    <Typography>
        We’d love to give you another loan once you’ve closed out your current loan. 
    </Typography>
  
  </div>

  <div className='flex justify-center items-center'>
    <img src={blacklisted} alt="" className='w-[460px]' />
  </div>

  </>;
}

export default LoanApplyBlacklisted;

export const Component = LoanApplyBlacklisted;
