type HomeChildParams = {
  params: {
    id: string;
  };
};

const HomeChild = ({ params: { id } }: HomeChildParams) => <>Home {id}</>;

export default HomeChild;
