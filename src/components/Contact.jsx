import { useForm } from 'react-hook-form'
import { LoadingButton } from '@mui/lab'

import React, { useRef } from 'react';
import {
  Avatar,
  Box,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm({
    mode: 'onTouched',
  })

  function sendEmail() {
      emailjs
            .sendForm(
              'gmail',
              'contact_form',
              form.current,
              '3tqpekwDkHp_fm-Uz'
            )
            .then(
              () => {
                alert('Message successfully sent!')
                window.location.reload(false)
              },
              () => {
                alert('Failed to send the message, please try again!')
              }
            )
  }

  return (
    <Container
      component={Paper}
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 4,
        mt: 10,
        backgroundColor: 'secondary.main',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
        <ContactMailIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Contact Me
      </Typography>
      <Box
        ref={form}
        component="form"
        onSubmit={handleSubmit(() =>
          sendEmail()
          
        )}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          label="Name"
          autoFocus
          {...register('name', { required: 'Your name is required' })} // register includes onChange and name
          error={!!errors.name} // !! casts username into a boolean. If it is false, it will give a red color
          helperText={errors?.name?.message}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email"
          {...register('email', {
            required: 'email is required',
            pattern: {
              value: /^\w+[\w-.]*@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/,
              message: 'Not a valid email address',
            },
          })} // register includes onChange and name
          error={!!errors.email} // !! casts username into a boolean. If it is false, it will give a red color
          helperText={errors?.email?.message}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          multiline
          label="Message"
          // type="text"
          {...register('message', {
            required: 'Message is required',
          })}
          error={!!errors.message} // !! casts username into a boolean. If it is false, it will give a red color
          helperText={errors?.message?.message}
        />
        <Box display="flex" justifyContent="center" alignItems="center">
          <LoadingButton
            loading={isSubmitting}
            disabled={!isValid}
            type="submit"
            // fullWidth

            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.dark' },
              fontWeight: 'bold',
            }}
          >
            Submit
          </LoadingButton>
        </Box>
      </Box>
    </Container>
  )
}
