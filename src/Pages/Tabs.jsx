import React, { useEffect } from "react"
import PropTypes from "prop-types"
import SwipeableViews from "react-swipeable-views"
import { useTheme } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import StrukturKelas from "./StrukturKelas"
import Schedule from "./Schedule"
import AOS from "aos"
import "aos/dist/aos.css"

// Fungsi TabPanel adalah komponen React yang digunakan untuk menampilkan konten tab.
function TabPanel(props) {
  // useEffect digunakan untuk inisialisasi AOS ketika komponen pertama kali dimuat.
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      duration: 800,
    })
    AOS.refresh()
  }, [])

  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

// Fungsi a11yProps digunakan untuk memberikan atribut aksesibilitas ke tab.
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  }
}

// Komponen utama yang akan digunakan untuk menampilkan tab.
export default function FullWidthTabs() {
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  // handleChange digunakan untuk mengubah nilai tab yang aktif.
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  // handleChangeIndex digunakan untuk mengubah indeks tab yang aktif.
  const handleChangeIndex = (index) => {
    setValue(index)
  }

  return (
    <div className="md:px-[5%] px-2 mt-20 mb-16 min-h-[600px]" id="Tabs">
      <div className="text-center mb-8" data-aos="fade-up" data-aos-duration="800">
        <span className="font-medium text-xl md:text-2xl text-gradient-tertiary">
          Class Information
        </span>
        <h2 className="font-medium text-3xl md:text-4xl text-white hero-text mt-2" data-text="Structure & Schedule">
          Structure & Schedule
        </h2>
      </div>
      
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <AppBar
          position="static"
          sx={{ bgcolor: "transparent", boxShadow: "none" }}
          className="px-[5%]">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="inherit"
            variant="fullWidth"
            sx={{
              width: "100%",
              maxWidth: "500px",
              margin: "0 auto",
              "& .MuiTabs-indicator": {
                backgroundImage: "linear-gradient(to right, var(--primary-color), var(--tertiary-color))",
                height: "3px",
                borderRadius: "3px"
              },
            }}
            className="glass-card p-1 rounded-full mb-8"
            data-aos="zoom-in"
            data-aos-duration="600">
            <Tab
              label="Structure"
              {...a11yProps(0)}
              sx={{
                fontWeight: "medium",
                color: "white",
                fontSize: {xs: "1rem", md: "1.2rem"},
                textTransform: "capitalize",
                fontFamily: '"Space Grotesk", sans-serif',
                padding: "0.75rem 1.5rem",
                borderRadius: "full",
                transition: "all 0.3s ease",
                "&.Mui-selected": {
                  color: "var(--primary-light)",
                  fontWeight: "bold",
                }
              }}
            />

            <Tab
              label="Schedule"
              {...a11yProps(1)}
              sx={{
                fontWeight: "medium",
                color: "white",
                fontSize: {xs: "1rem", md: "1.2rem"},
                textTransform: "capitalize",
                fontFamily: '"Space Grotesk", sans-serif',
                padding: "0.75rem 1.5rem",
                borderRadius: "full",
                transition: "all 0.3s ease",
                "&.Mui-selected": {
                  color: "var(--accent-light)",
                  fontWeight: "bold",
                }
              }}
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
          style={{ overflow: "visible" }}>
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div data-aos="fade-up" data-aos-duration="800">
              <StrukturKelas />
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div>
              <Schedule />
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  )
}