import Button from '../ui/Button';

const Buttons = () => {
  return (
    <div id="buttons" className="space-y-4">
      <h1 className="text-3xl font-bold">Buttons</h1>
      <div className="space-y-4">
        <h6 className="font-bold text-xl">Basic Buttons</h6>
        <div className="border border-primary p-4 flex items-center justify-center space-x-4 rounded-md">
          <Button children={'Text'} />
          <Button children={'Outline'} />
          <Button children={'Fill'} />
        </div>
        <h6 className="font-bold text-xl">Disabled</h6>
        <div className="border border-primary p-4 flex items-center justify-center space-x-4 rounded-md">
          <Button size="md" children={'Disabled'} disabled />
        </div>
        <h6 className="font-bold text-xl">Sizes</h6>
        <div className="border border-primary p-4 flex items-center justify-center space-x-4 rounded-md">
          <Button size="sm" children={'Small'} />
          <Button size="md" children={'Medium'} />
          <Button size="lg" children={'Large'} />
        </div>
        <h6 className="font-bold text-xl">Colors</h6>
        <div className="border border-primary p-4 flex items-center justify-center space-x-4 rounded-md">
          <Button size="md" children={'Colors'} />
        </div>
        <h6 className="font-bold text-xl">Loading</h6>
        <div className="border border-primary p-4 flex items-center justify-center space-x-4 rounded-md">
          <Button size="sm" children={'Loading'} loading />
          <Button size="md" children={'Loading'} loading />
          <Button size="lg" children={'Loading'} loading />
        </div>
      </div>
    </div>
  );
};

export default Buttons;
