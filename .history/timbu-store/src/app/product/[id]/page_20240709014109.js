"use client";

import { useParams } from "next/navigation";
import { inventory } from "@/products";
import { Box, Stack, Typography, Rating, Button } from "@mui/material";
import Image from "next/image";

export default function ProductPage() {
  const { id } = useParams();
  const productName = decodeURIComponent(id);

  const product = inventory.find((item) => item.productName === productName);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Stack>
        <Box id={"small widgets"}></Box>
        <Box>
          <Stack>
            <Container>
              <Grid container>
                <Grid
                  item
                  className={"item"}
                  xl={10}
                  lg={8}
                  md={6}
                  sm={12}
                  xs={12}
                >
                  <Cart />
                </Grid>
                <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                  <Stack spacing={5}>
                    <Box
                      sx={{
                        border: "1px solid grey",
                        height: "98px",
                        width: "324px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image src={stationPickup} />
                      <Typography>Station pickup</Typography>
                    </Box>

                    <Box
                      sx={{
                        border: "1px solid grey",
                        height: "98px",
                        width: "324px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image src={doorDelivery} />
                      <Typography>Station pickup</Typography>
                    </Box>

                    <Box
                      sx={{
                        border: "1px solid grey",
                        width: "324px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "12px",
                      }}
                    >
                      <Typography>Subtotal</Typography>
                      <Typography>$500</Typography>
                    </Box>
                    <Button
                      sx={{
                        backgroundColor: " #ED8174",
                        color: "#FFFFFF",
                        borderRadius: "0",
                      }}
                    >
                      Checkout
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Container>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
