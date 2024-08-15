/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Slider from 'react-slick'
import { Box, Button, Card, Typography } from '@mui/material'
import css from '../styles/Slider.module.css'
import itemsData from '../data/slider.json'

function SliderComponent({ category }) {
  const sliderRef = React.useRef(null)

  const filterData = itemsData.filter((item) => item.category === category)

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  const goToNext = () => {
    sliderRef.current.slickNext()
  }

  const goToPrev = () => {
    sliderRef.current.slickPrev()
  }

  const hasData = filterData.length > 0

  return (
    <Box
      sx={{
        width: '100%',
        height: '344px',
        marginTop: '40px',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <Typography variant="h5" fontWeight="bold" m={0}>
          {category.toUpperCase()}
        </Typography>
        <Box
          sx={{
            width: '145px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Typography fontWeight="bold" mr={2}>
            SEE ALL
          </Typography>
          <Button
            sx={{
              width: '24px',
              height: '24px',
              minWidth: 'auto',
              marginRight: '8px',
              padding: 0,
              borderRadius: '100%',
              '& img': {
                width: '100%',
                height: '100%',
              },
            }}
            onClick={goToPrev}
            aria-label="Previous Slide"
            disabled={!hasData}
          >
            <img src="./buttons/leftButton.png" alt="Left Button" />
          </Button>
          <Button
            sx={{
              width: '24px',
              height: '24px',
              minWidth: 'auto',
              padding: 0,
              borderRadius: '100%',
              '& img': {
                width: '100%',
                height: '100%',
              },
            }}
            onClick={goToNext}
            aria-label="Next Slide"
            disabled={!hasData}
          >
            <img src="./buttons/rightButton.png" alt="Right Button" />
          </Button>
        </Box>
      </Box>

      {hasData ? (
        <Slider ref={sliderRef} {...settings} className={css.containerSlider}>
          {filterData.map((item) => (
            <Box
              key={item.id}
              sx={{
                height: '100%',
                width: '250px',
                boxSizing: 'border-box',
                flexShrink: 0,
              }}
            >
              <Card height="292px" sx={{ borderRadius: '4px 4px 0 0 ' }}>
                <Box sx={{ position: 'relative', height: 150 }}>
                  <img
                    height="150"
                    src={item.imgSrc}
                    alt={`Image of ${item.title}`}
                  />
                  <Button
                    sx={{
                      width: '100px',
                      height: '34px',
                      borderRadius: '2px',
                      padding: '10px',
                      bgcolor: 'black',
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      zIndex: 20,
                      boxSizing: 'border-box',
                      display: 'flex',
                      alignItems: 'center',
                      '&:hover': {
                        bgcolor: 'black',
                      },
                    }}
                    aria-label="Add to favorites"
                  >
                    <img
                      className="w-[12px] h-[11px] mr-2"
                      src="./imageItem/iconLove.png"
                      alt="Add to favorites"
                    />
                    <Typography
                      fontSize="11px"
                      fontWeight="bold"
                      color="white"
                      height="16px"
                    >
                      LÄGG TILL
                    </Typography>
                  </Button>
                </Box>
              </Card>
              <Box
                sx={{
                  height: '142px',
                  width: '250px',
                  margin: 0,
                  borderRadius: '0 0 4px 4px',
                  bgcolor: '#FDF8F5',
                  paddingTop: '8px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    height: '22px',
                    padding: '0 12px',
                  }}
                >
                  {item.tags.map((tag) => (
                    <Box
                      key={tag}
                      sx={{
                        borderRadius: '9999px',
                        border: '1px solid black',
                        padding: '6px 8px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: '8px',
                        fontWeight: 500,
                        fontSize: '12px',
                      }}
                    >
                      {tag}
                    </Box>
                  ))}
                </Box>
                <Typography
                  sx={{
                    padding: '0 12px',
                    margin: '8px 0',
                    fontSize: '14px',
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    height: '16px',
                    padding: '0 12px',
                    marginBottom: '8px',
                    fontSize: '12px',
                    fontWeight: 500,
                    fontFamily:
                      "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                  }}
                >
                  {item.description}
                </Typography>
                <Box
                  sx={{
                    height: '22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 12px',
                  }}
                >
                  <Typography
                    sx={{
                      width: '115px',
                      height: '16px',
                      fontSize: '12px',
                      fontWeight: 400,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {item.location}
                  </Typography>
                  <Typography
                    sx={{
                      width: '64px',
                      height: '22px',
                      borderRadius: '2px',
                      padding: '6px',
                      bgcolor: '#FAEBE3',
                      fontSize: '12px',
                      fontWeight: 500,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontFamily:
                        "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                    }}
                  >
                    {item.price}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      ) : (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            // height: '100%',
            width: '1200px',
            textAlign: 'center',
            padding: '20px',
          }}
        >
          <Typography fontSize="48px">Not found</Typography>
        </Box>
      )}
    </Box>
  )
}

export default SliderComponent
