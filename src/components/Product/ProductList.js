import Image from "next/image";
import { useRouter } from "next/router";

const ProductList = ({ data }) => {
  const img = "https://source.unsplash.com/500x500";
  const router = useRouter();

  const handleNavigate = (id) => {
    router.replace(`/product-list/${id}`);
  };

  const { result: datas } = data;

  return (
    <div className="container px-4 flex flex-wrap flex-row mx-auto ">
      {datas.map((i) => (
        <div className="p-2 w-1/2 md:w-4/12 lg:w-1/4" key={i.id}>
          <div className=" overflow-hidden rounded-md shadow-md cursor-pointer hover:scale-105 transition-all">
            <Image
              src={`https://source.unsplash.com/1000x1000?${i.name}`}
              loader={({ src }) => src}
              unoptimized
              width={1000}
              height={1000}
              alt="alt"
              className="object-cover block bg-no-repeat h-min"
            />
            <div className="p-3">
              <h6 className="font-medium leading-loose text-base tracking-wide truncate">
                {i.name}
              </h6>
              <h6 className=" leading-relaxed text-sm tracking-wide truncate mt-1">
                {i.description}
              </h6>
              <h5 className="leading-relaxed font-medium text-base mt-2">
                ${i.price}
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
    // <Container>
    //   <Grid>
    //     {datas.map((i) => (
    //       <Col key={i.id} onClick={() => handleNavigate(i.id)}>
    //         <Card onClick={handleNavigate}>
    //           <CardImg src={`${img}?${i.name}`} />
    //           <CardContent>
    //             <CardTitle>{i.name}</CardTitle>

    //             <CardText>{i.description}</CardText>
    //             <CardPrice>${i.price}</CardPrice>
    //           </CardContent>
    //         </Card>
    //       </Col>
    //     ))}
    //   </Grid>
    // </Container>
  );
};
export default ProductList;
