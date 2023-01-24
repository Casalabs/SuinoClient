export async function getServerSideProps() {
  const initialData = await fetch("http://34.125.37.158:3306").then((x) =>
    x.json()
  );
  return { props: { data: initialData } };
}
