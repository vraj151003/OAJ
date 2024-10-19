import React from "react";
import {
  TextField,
  Grid,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import "../Pages/FormPage.css";


const FormPage = ({
  formdata,
  setFormData,
  initiatePayment,
  err,
  handleSubjectChange,
  onSubmit,
}) => {
  const subjects = ["Computer", "Maths", "Science", "English"];
  return (
    <Box mr={4} ml={4}>
       <Box mb={4} textAlign="center">
  <img
    src="/OAJ.png"
    alt="Form Banner"
    style={{ width: "125px", height: "auto" }}
  />
</Box>
 {err && (
        <Typography color="error" variant="body1" mb={2}>
          {err}
        </Typography>
      )}
            <form onSubmit={onSubmit}> 
      <Grid container spacing={2} mt={4} sx={{ background: "none" }}>
        <Grid item xs={12} md={6} className="form-item">
          <TextField
            fullWidth
            type="text"
            label="Name"
            name="name"
            value={formdata?.name || ""}
            onChange={(e) => setFormData({ ...formdata, name: e.target.value })}
            required
          />
        </Grid>

        <Grid item xs={12} md={6} className="form-item">
          <TextField
            fullWidth
            type="email"
            label="Email"
            name="email"
            value={formdata?.email || ""}
            onChange={(e) => setFormData({ ...formdata, email: e.target.value })}
            required
          />
        </Grid>

        <Grid item xs={12} md={6} className="form-item">
          <TextField
            fullWidth
            type="text"
            label="Phone Number"
            name="phone"
            value={formdata?.phone || ""}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d{0,10}$/.test(value)) {
                setFormData({ ...formdata, phone: e.target.value });
              }
            }}
            required
          />
        </Grid>

        <Grid item xs={12} md={6} className="form-item">
          <TextField
            fullWidth
            label="City"
            name="city"
            value={formdata?.city || ""}
            onChange={(e) =>
              setFormData({ ...formdata, city: e.target.value })
            }
            required
          />
        </Grid>

        <Grid item xs={12} md={6} className="form-item">
          <TextField
            fullWidth
            label="School Name"
            name="school"
            value={formdata?.school || ""}
            onChange={(e) =>
              setFormData({ ...formdata, school: e.target.value })
            }
            required
          />
        </Grid>

        <Grid item xs={12} md={6} className="form-item">
          <TextField
            fullWidth
            label="Address"
            name="address"
            multiline
            rows={2}
            value={formdata?.address || ""}
            onChange={(e) =>
              setFormData({ ...formdata, address: e.target.value })
            }
            required
          />
        </Grid>

        <Grid item xs={12} md={6} className="form-item">
          <TextField
            fullWidth
            label="School Address"
            name="school_Address"
            multiline
            rows={2}
            value={formdata?.school_address || ""}
            onChange={(e) =>
              setFormData({ ...formdata, school_address: e.target.value })
            }
            required
          />
        </Grid>

        <Grid item xs={12} md={6} className="form-item">
          <FormControl fullWidth>
            <InputLabel id="select-number-label">Select a Standard</InputLabel>
            <Select
              labelId="select-number-label"
              name="standard"
              value={formdata?.standard || ""}
              onChange={(e) =>
                setFormData({ ...formdata, standard: e.target.value })
              }
              label="Select a Number"
              required
            >
              {[6, 7, 8, 9, 10].map((number) => (
                <MenuItem key={number} value={number}>
                  {number}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6} className="form-item">
          <FormControl fullWidth>
            <InputLabel id="select-medium-label">Select Medium</InputLabel>
            <Select
              labelId="select-medium-label"
              name="medium"
              value={formdata?.medium || ""}
              onChange={(e) =>
                setFormData({ ...formdata, medium: e.target.value })
              }
              label="Select Medium"
              required
            >
              <MenuItem value="gujarati">Gujarati</MenuItem>
              <MenuItem value="english">English</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} className="form-item">
          <Typography variant="h6">Select Subjects</Typography>
          {subjects.map((subject) => (
            <FormControlLabel
              key={subject}
              control={
                <Checkbox
                  checked={formdata.subjects.includes(subject)}
                  onChange={() => handleSubjectChange(subject)}
                  name={subject}
                />
              }
              label={subject}
            />
          ))}
        </Grid>

        <Grid item xs={12} className="form-item">
          <Button variant="contained" type="submit" color="primary">
            Pay Now
          </Button>
        </Grid>
      </Grid>
      </form>
    </Box>
  );
};

export default FormPage;
