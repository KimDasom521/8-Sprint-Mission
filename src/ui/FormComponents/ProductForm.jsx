import { useEffect, useState } from 'react';
import { Form } from 'react-router-dom';
import FileInput from './FileInput';
import TagInput from './TagInput';
import Input from './Input';
import TextArea from './TextArea';
import Button from '../Button/Button';
import styles from './ProductForm.module.css';

const INITIAL_VALUES = {
  imgFile: null,
  title: '',
  description: '',
  price: '',
  tag: [],
};

export default function ProductForm() {
  const [formValues, setFormValues] = useState(INITIAL_VALUES);
  const [isActive, setIsActive] = useState(false);

  const { title, description, price, tag } = formValues;
  const submitActive =
    title.trim() !== '' &&
    description.trim() !== '' &&
    price !== '' &&
    tag.length;

  const handleChangeValue = (name, value) => {
    setFormValues(prevValue => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleChangeInput = (name, value) => {
    handleChangeValue(name, value);
  };

  useEffect(() => {
    setIsActive(() => submitActive);
  }, [formValues]);

  return (
    <Form method="post" className={styles.formContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>상품 등록하기</h2>
        <Button isActive={!isActive} btnName="등록" />
      </div>
      <div className={styles.fileContainer}>
        <h2 className={styles.fileTitle}>상품 이미지</h2>
        <FileInput
          id="imgFile"
          name="imgFile"
          type="file"
          accept="image/png, image/jpeg"
          value={formValues.imgFile}
          changeValue={handleChangeValue}
        />
      </div>
      <Input
        className={styles.inputBox}
        id="title"
        label="상품명"
        type="text"
        name="title"
        value={formValues.title}
        placeholder="상품명을 입력해주세요"
        changeValue={handleChangeInput}
      />
      <TextArea
        id="description"
        label="상품 소개"
        type="text"
        name="description"
        className={styles.inputBox}
        variant="addProduct"
        value={formValues.description}
        placeholder="상품 소개를 입력해주세요"
        changeValue={handleChangeInput}
      />
      <Input
        className={styles.inputBox}
        id="price"
        label="판매가격"
        type="number"
        name="price"
        value={formValues.price}
        placeholder="판매 가격을 입력해주세요"
        changeValue={handleChangeInput}
      />
      <TagInput
        id="tag"
        label="태그"
        type="text"
        name="tag"
        tags={formValues.tag}
        placeholder="태그를 입력해주세요"
        changeValue={handleChangeInput}
      />
    </Form>
  );
}
