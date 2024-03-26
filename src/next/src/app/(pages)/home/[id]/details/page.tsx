type HomeDetailsPageParams = {
  params: {
    id: string;
  };
};

const HomeDetailsPage = ({ params: { id } }: HomeDetailsPageParams) => (
  <h3>Home Details Page - {id}</h3>
);

export default HomeDetailsPage;
