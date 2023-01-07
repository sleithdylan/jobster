import React from 'react';

import { Box, Divider, List, Sheet } from '@mui/joy';
import { Skeleton } from '@mui/material';

function JobItemSkeleton() {
  return (
    <>
      <List
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 2,
        }}
      >
        <Sheet
          component="li"
          variant="outlined"
          sx={{
            borderRadius: 'sm',
            p: 2,
            listStyle: 'none',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '10.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton variant="circular" width="37.5%" height={40} />
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '6rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Box sx={{ width: '10rem', my: 2 }}>
            <Skeleton width="100%" height={30} animation="wave" />
          </Box>
          <Box sx={{ my: 2 }}>
            <Box
              sx={{
                width: '4rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '7.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '9.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Divider sx={{ mt: 2 }} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '35rem',
              }}
            >
              <Skeleton width="100%" height={65} animation="wave" />
              <Skeleton width="100%" height={65} animation="wave" />
            </Box>
          </Box>
        </Sheet>
        <Sheet
          component="li"
          variant="outlined"
          sx={{
            borderRadius: 'sm',
            p: 2,
            listStyle: 'none',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '10.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton variant="circular" width="37.5%" height={40} />
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '6rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Box sx={{ width: '10rem', my: 2 }}>
            <Skeleton width="100%" height={30} animation="wave" />
          </Box>
          <Box sx={{ my: 2 }}>
            <Box
              sx={{
                width: '4rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '7.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '9.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Divider sx={{ mt: 2 }} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '35rem',
              }}
            >
              <Skeleton width="100%" height={65} animation="wave" />
              <Skeleton width="100%" height={65} animation="wave" />
            </Box>
          </Box>
        </Sheet>
        <Sheet
          component="li"
          variant="outlined"
          sx={{
            borderRadius: 'sm',
            p: 2,
            listStyle: 'none',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '10.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton variant="circular" width="37.5%" height={40} />
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '6rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Box sx={{ width: '10rem', my: 2 }}>
            <Skeleton width="100%" height={30} animation="wave" />
          </Box>
          <Box sx={{ my: 2 }}>
            <Box
              sx={{
                width: '4rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '7.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '9.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Divider sx={{ mt: 2 }} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '35rem',
              }}
            >
              <Skeleton width="100%" height={65} animation="wave" />
              <Skeleton width="100%" height={65} animation="wave" />
            </Box>
          </Box>
        </Sheet>
        <Sheet
          component="li"
          variant="outlined"
          sx={{
            borderRadius: 'sm',
            p: 2,
            listStyle: 'none',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '10.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton variant="circular" width="37.5%" height={40} />
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '6rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Box sx={{ width: '10rem', my: 2 }}>
            <Skeleton width="100%" height={30} animation="wave" />
          </Box>
          <Box sx={{ my: 2 }}>
            <Box
              sx={{
                width: '4rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '7.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '9.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Divider sx={{ mt: 2 }} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '35rem',
              }}
            >
              <Skeleton width="100%" height={65} animation="wave" />
              <Skeleton width="100%" height={65} animation="wave" />
            </Box>
          </Box>
        </Sheet>
        <Sheet
          component="li"
          variant="outlined"
          sx={{
            borderRadius: 'sm',
            p: 2,
            listStyle: 'none',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '10.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton variant="circular" width="37.5%" height={40} />
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '6rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Box sx={{ width: '10rem', my: 2 }}>
            <Skeleton width="100%" height={30} animation="wave" />
          </Box>
          <Box sx={{ my: 2 }}>
            <Box
              sx={{
                width: '4rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '7.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '9.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Divider sx={{ mt: 2 }} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '35rem',
              }}
            >
              <Skeleton width="100%" height={65} animation="wave" />
              <Skeleton width="100%" height={65} animation="wave" />
            </Box>
          </Box>
        </Sheet>
        <Sheet
          component="li"
          variant="outlined"
          sx={{
            borderRadius: 'sm',
            p: 2,
            listStyle: 'none',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '10.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton variant="circular" width="37.5%" height={40} />
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '6rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Box sx={{ width: '10rem', my: 2 }}>
            <Skeleton width="100%" height={30} animation="wave" />
          </Box>
          <Box sx={{ my: 2 }}>
            <Box
              sx={{
                width: '4rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '7.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '9.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Divider sx={{ mt: 2 }} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '35rem',
              }}
            >
              <Skeleton width="100%" height={65} animation="wave" />
              <Skeleton width="100%" height={65} animation="wave" />
            </Box>
          </Box>
        </Sheet>
        <Sheet
          component="li"
          variant="outlined"
          sx={{
            borderRadius: 'sm',
            p: 2,
            listStyle: 'none',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '10.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton variant="circular" width="37.5%" height={40} />
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '6rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Box sx={{ width: '10rem', my: 2 }}>
            <Skeleton width="100%" height={30} animation="wave" />
          </Box>
          <Box sx={{ my: 2 }}>
            <Box
              sx={{
                width: '4rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '7.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '9.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Divider sx={{ mt: 2 }} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '35rem',
              }}
            >
              <Skeleton width="100%" height={65} animation="wave" />
              <Skeleton width="100%" height={65} animation="wave" />
            </Box>
          </Box>
        </Sheet>
        <Sheet
          component="li"
          variant="outlined"
          sx={{
            borderRadius: 'sm',
            p: 2,
            listStyle: 'none',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '10.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton variant="circular" width="37.5%" height={40} />
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '6rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Box sx={{ width: '10rem', my: 2 }}>
            <Skeleton width="100%" height={30} animation="wave" />
          </Box>
          <Box sx={{ my: 2 }}>
            <Box
              sx={{
                width: '4rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '7.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '9.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Divider sx={{ mt: 2 }} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '35rem',
              }}
            >
              <Skeleton width="100%" height={65} animation="wave" />
              <Skeleton width="100%" height={65} animation="wave" />
            </Box>
          </Box>
        </Sheet>
        <Sheet
          component="li"
          variant="outlined"
          sx={{
            borderRadius: 'sm',
            p: 2,
            listStyle: 'none',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '10.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton variant="circular" width="37.5%" height={40} />
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '6rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Box sx={{ width: '10rem', my: 2 }}>
            <Skeleton width="100%" height={30} animation="wave" />
          </Box>
          <Box sx={{ my: 2 }}>
            <Box
              sx={{
                width: '4rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '7.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '9.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Divider sx={{ mt: 2 }} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '35rem',
              }}
            >
              <Skeleton width="100%" height={65} animation="wave" />
              <Skeleton width="100%" height={65} animation="wave" />
            </Box>
          </Box>
        </Sheet>
        <Sheet
          component="li"
          variant="outlined"
          sx={{
            borderRadius: 'sm',
            p: 2,
            listStyle: 'none',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '10.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton variant="circular" width="37.5%" height={40} />
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '6rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Box sx={{ width: '10rem', my: 2 }}>
            <Skeleton width="100%" height={30} animation="wave" />
          </Box>
          <Box sx={{ my: 2 }}>
            <Box
              sx={{
                width: '4rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '7.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '9.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Divider sx={{ mt: 2 }} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '35rem',
              }}
            >
              <Skeleton width="100%" height={65} animation="wave" />
              <Skeleton width="100%" height={65} animation="wave" />
            </Box>
          </Box>
        </Sheet>
        <Sheet
          component="li"
          variant="outlined"
          sx={{
            borderRadius: 'sm',
            p: 2,
            listStyle: 'none',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '10.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton variant="circular" width="37.5%" height={40} />
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '6rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Box sx={{ width: '10rem', my: 2 }}>
            <Skeleton width="100%" height={30} animation="wave" />
          </Box>
          <Box sx={{ my: 2 }}>
            <Box
              sx={{
                width: '4rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '7.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '9.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Divider sx={{ mt: 2 }} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '35rem',
              }}
            >
              <Skeleton width="100%" height={65} animation="wave" />
              <Skeleton width="100%" height={65} animation="wave" />
            </Box>
          </Box>
        </Sheet>
        <Sheet
          component="li"
          variant="outlined"
          sx={{
            borderRadius: 'sm',
            p: 2,
            listStyle: 'none',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '10.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton variant="circular" width="37.5%" height={40} />
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '6rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Box sx={{ width: '10rem', my: 2 }}>
            <Skeleton width="100%" height={30} animation="wave" />
          </Box>
          <Box sx={{ my: 2 }}>
            <Box
              sx={{
                width: '4rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '7.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
            <Box
              sx={{
                width: '9.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Skeleton width="100%" height={30} animation="wave" />
            </Box>
          </Box>
          <Divider sx={{ mt: 2 }} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: '35rem',
              }}
            >
              <Skeleton width="100%" height={65} animation="wave" />
              <Skeleton width="100%" height={65} animation="wave" />
            </Box>
          </Box>
        </Sheet>
      </List>
    </>
  );
}

export default JobItemSkeleton;
