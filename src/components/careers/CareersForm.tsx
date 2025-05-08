'use client';
import { TextField } from '@mui/material';

const CareersForm = () => {
  return (
    <div className="">
      <div>
        <TextField id="standard-basic" label="Full Name" variant="standard" className="mb-6 w-full" />
      </div>
      <div>
        <TextField id="standard-basic" label="Email" variant="standard" className="mb-6 w-full" />
      </div>
      <div>
        <TextField id="standard-basic" label="Phone No" variant="standard" className="mb-6 w-full" />
      </div>
      <div>
        <TextField id="standard-basic" label="Choose Position" variant="standard" className="mb-6 w-full" />
      </div>
      <div>
        <TextField id="standard-basic" label="Specify Employment Status" variant="standard" className="mb-6 w-full" />
      </div>
      <div>
        <TextField id="standard-basic" label="Resume" variant="standard" className="mb-6 w-full" />
      </div>
      <div>
        <TextField id="standard-basic" label="Comments" variant="standard" className="mb-6 w-full" />
      </div>
      <div>
        <button className="block w-full rounded-[10px] bg-black py-2 font-secondary font-bold text-white">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default CareersForm;
