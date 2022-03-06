import Layout from '../../components/templates/layout';
import Buttons from '../../components/molecules/buttons';
import Selects from '../../components/molecules/selects';
import TextField from '../../components/molecules/text-fields';

const Components = () => {
  return (
    <Layout>
      <div className="space-y-4">
        <Buttons />
        <TextField />
        <Selects />
      </div>
    </Layout>
  );
};

export default Components;
