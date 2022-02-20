import PageWrapper from '../components/common/layout/PageWrapper';
import Buttons from '../components/components/layout/Buttons';
import Selects from '../components/components/layout/Selects';
import TextField from '../components/components/layout/TextFields';

const Components = () => {
  return (
    <PageWrapper>
      <div className="space-y-4">
        <Buttons />
        <TextField />
        <Selects />
      </div>
    </PageWrapper>
  );
};

export default Components;
