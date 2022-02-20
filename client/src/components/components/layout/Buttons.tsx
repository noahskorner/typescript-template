import Button from '../ui/Button';
import Component from './Component';
import Variant from './Variant';

const Buttons = () => {
  return (
    <Component header="Buttons">
      <Variant header="Basic Buttons">
        <Button children={'Text'} />
        <Button children={'Outline'} />
        <Button children={'Fill'} />
      </Variant>
      <Variant header="Disabled">
        <Button size="md" children={'Primary'} disabled color="primary" />
        <Button size="md" children={'Secondary'} disabled color="secondary" />
        <Button size="md" children={'Success'} disabled color="success" />
        <Button size="md" children={'Warning'} disabled color="warning" />
        <Button size="md" children={'Danger'} disabled color="danger" />
      </Variant>
      <Variant header="Sizes">
        <Button size="sm" children={'Small'} />
        <Button size="md" children={'Medium'} />
        <Button size="lg" children={'Large'} />
      </Variant>
      <Variant header="Colors">
        <Button size="md" children={'Primary'} color="primary" />
        <Button size="md" children={'Secondary'} color="secondary" />
        <Button size="md" children={'Success'} color="success" />
        <Button size="md" children={'Warning'} color="warning" />
        <Button size="md" children={'Danger'} color="danger" />
      </Variant>
      <Variant header="Loading">
        <Button size="sm" children={'Loading'} loading />
        <Button size="md" children={'Loading'} loading />
        <Button size="lg" children={'Loading'} loading />
      </Variant>
    </Component>
  );
};

export default Buttons;
