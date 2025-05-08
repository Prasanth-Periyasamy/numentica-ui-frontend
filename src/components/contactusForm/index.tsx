'use client';
import Image from 'next/image';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { z } from 'zod';
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from '@mui/material';
import Button from '../button/page';
import { location, phone, message } from '@/utils/imageConstants';
import './style.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const schema = z
  .object({
    firstName: z
      .string()
      .nonempty({ message: 'First name is required' })
      .min(2, { message: 'First name must be atleast 2 chars' })
      .max(50, { message: 'First name must be less than 50 chars' })
      .regex(/^[A-Za-z]+$/, { message: 'First name must only contain letters' }),
    lastName: z
      .string()
      .min(2, { message: 'Last name must be atleast 2 chars' })
      .max(50, { message: 'Last name must be less than 50 chars' })
      .regex(/^[A-Za-z]+$/, { message: 'Last name must only contain letters' })
      .optional()
      .or(z.literal('')),
    email: z
      .string()
      .nonempty({ message: 'Email is required' })
      .email({ message: 'Email must be a valid email address' }),
    phoneNumber: z
      .string()
      .length(10, { message: 'Phone number must be exactly 10 digits' })
      .regex(/^\+?[1-9]\d{1,14}$/, { message: 'Phone number must be valid' })
      .optional()
      .or(z.literal('')),
    services: z.array(z.string()).min(1, { message: 'Atleast one service must be specified' }),
    message: z
      .string()
      .min(10, { message: 'Message must be at least 10 chars' })
      .max(500, { message: 'Message must be less than 500 chars' })
      .optional()
      .or(z.literal('')),
  })
  .refine(
    (data) => {
      if (data.services.includes('Others')) {
        console.log(data.services.includes('Others'));

        return false;
      }
      return true;
    },
    {
      message: 'Message is required when "Others" is selected in services.',
      path: ['message'],
    },
  );

type FormFields = z.infer<typeof schema>;

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    trigger,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      services: [],
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      toast.success('Sent successfully');
      await new Promise((resolve) => setTimeout(resolve, 1000));
      reset();
      setValue('services', []);
      setPersonName([]);
    } catch (error) {
      setError('root', { message: 'This email is already Taken' });
    }
  };

  // Shows error out focusing
  const handleBlur = async (field: keyof FormFields) => {
    await trigger(field);
  };

  const [personName, setPersonName] = useState([]);

  const handleChange = (event: any) => {
    const { value } = event.target;
    // console.log('event', event.target.value);

    if (value) {
      setPersonName(typeof value === 'string' ? value.split(',') : value);
      console.log(setValue('services', typeof value === 'string' ? value.split(',') : value));
    }
  };

  const names = [
    'Application Revitalization',
    'Multi-Platform Engineering',
    'Continuous Delivery as a Service',
    'CMS Engineering',
    'Modular Engineering',
    'BrandXperience Engineering',
    'Others',
  ];

  console.log(watch(['firstName', 'lastName', 'email', 'phoneNumber', 'message', 'services']));

  return (
    <main>
      <h1 className="text-center text-[#232323]">Contact Us</h1>
      <p className="text-center text-lg text-[#232323]">Any question or remarks? Just write us a message!</p>
      <div className="mt-5 flex items-start gap-6">
        <div className="info-gradient w-[40%] bg-red-200 px-6 py-9 text-white">
          <h3 className=" contact-info relative mb-8 font-semibold text-inherit">Contact Information</h3>
          <div className="mb-4 flex items-start  gap-6">
            <Image src={phone} alt="" className="mt-1 size-4" />
            <div>
              <p className="mb-2.5 font-primary text-inherit">+1-7194020771</p>
              <p className="font-primary text-inherit">+91 99629 55933</p>
            </div>
          </div>
          <div className="mb-4 flex  items-start gap-6">
            <Image src={message} alt="" className="mt-1 size-4" />
            <p className="font-primary text-inherit">info@numentica-ui.com</p>
          </div>
          <div className="mb-4 flex items-start gap-6">
            <Image src={location} alt="" className="mt-1 size-4" />
            <div>
              <p className="mb-2.5 font-primary text-inherit">USA</p>
              <p className="font-primary text-inherit">3868 W Carson St, Suite 300 Torrance, CA 90503, USA.</p>
            </div>
          </div>
          <div className="mb-4 flex gap-6">
            <Image src={location} alt="" className="mt-1 size-4" />
            <div>
              <p className="mb-2.5 font-primary text-inherit">India</p>
              <p className="font-primary text-inherit">
                Rayala Techno Park, 3rd floor, 144/7, Rajiv Gandhi Salai, OMR, Kottivakkam, Chennai, Tamil Nadu- 600041.
              </p>
            </div>
          </div>
        </div>
        <form action="/submit" method="post" className="mt-12 w-[60%]" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-10 flex w-full gap-6">
            <div>
              <TextField
                label="First Name"
                placeholder="John"
                {...register('firstName')}
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                className="input-fields w-full"
                // onChange={(e) => handleChange(e)}
                onBlur={() => handleBlur('firstName')}
              />
              {errors.firstName && (
                <div className="error text-10px text-left text-red-500">{errors.firstName.message}</div>
              )}
            </div>
            <div>
              <TextField
                placeholder="Doe"
                label="Last Name"
                type="text"
                {...register('lastName')}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                className="input-fields w-full"
                // onChange={(e) => handleChange(e)}
                onBlur={() => handleBlur('lastName')}
              />
              {errors.lastName && (
                <div className="error text-10px text-left text-red-500">{errors.lastName.message}</div>
              )}
            </div>
          </div>
          <div className="mb-10 flex w-full gap-6">
            <div>
              <TextField
                placeholder="johndoe@gmail.com"
                label="Email"
                type="email"
                {...register('email')}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                className="input-fields w-full"
                // onChange={(e) => handleChange(e)}
                onBlur={() => handleBlur('email')}
              />
              {errors.email && <div className="error text-10px text-left text-red-500">{errors.email.message}</div>}
            </div>
            <div>
              <TextField
                placeholder="+911234567890"
                label="Phone Number"
                type="number"
                {...register('phoneNumber')}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                className="input-fields w-full"
                // onChange={(e) => handleChange(e)}
                onBlur={() => handleBlur('phoneNumber')}
              />
              {errors.phoneNumber && (
                <div className="error text-10px text-left text-red-500">{errors.phoneNumber.message}</div>
              )}
            </div>
          </div>
          <div className="mb-10">
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel variant="standard" shrink id="demo-multiple-checkbox-label">
                How can NUI help you?
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                {...register('services', { required: 'At least one service is required' })}
                onChange={(e) => handleChange(e)}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
                placeholder="Select"
                onBlur={() => handleBlur('services')}
              >
                {names.map((name) => (
                  <MenuItem disableRipple key={name} value={name}>
                    {/* <Checkbox disableRipple checked={personName.indexOf(name) > -1} /> */}
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {errors.services && <div className="error text-10px text-left text-red-500">{errors.services.message}</div>}
          </div>
          <div className="mb-10 w-full">
            <TextField
              placeholder="Write your message.."
              label="Anything Else"
              type="text"
              {...register('message')}
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
              className="w-full "
              // onChange={() => handleChange('message')}
              onBlur={() => handleBlur('message')}
            />
            {errors.message && <div className="error text-10px text-left text-red-500">{errors.message.message}</div>}
          </div>
          <div className="flex w-full items-end">
            <Button type="submit" btnName="Submit" handleClick={() => {}} className="font- ml-auto bg-[#0063F7]" />
          </div>
        </form>
      </div>
    </main>
  );
};

export default ContactUs;
