import { Model } from 'mongoose';

export const get_one = async (model: any, id: string) => {
  try {
    console.log(id);
    const response = await model.findById(id).exec();
    console.log(response);
    return { message: 'Fetched Successfully', code: 200, data: response };
  } catch (error) {
    return {
      message: error.message,
      code: error.code,
    };
  }
};

export const get_many = async (
  model: any,
  filterArr: any[],
  page: number,
  size: number,
) => {
  try {
    let request = model.find();
    filterArr.forEach((filter) => {
      request = request.where(filter.column).equals(filter.value);
    });
    request = request.skip(page * size).limit(size);
    const response = await request.exec();
    console.log(response);
    return { message: 'Fetched Successfully', code: 200, data: response };
  } catch (error) {
    return {
      message: error.message,
      code: error.code,
    };
  }
};

export const create_one = async (model: any, data: any) => {
  try {
    const model_obj = new model(data);
    const response = await model_obj.save();
    console.log(response);
    return { message: 'Created Successfully', code: 200 };
  } catch (error) {
    return {
      message: error.message,
      code: error.code,
    };
  }
};

export const delete_one = async (model: any, id: string) => {
  try {
    const response = await model.deleteOne({ _id: id });
    return { message: 'Deleted Successfully', code: 200 };
  } catch (error) {
    return {
      message: error.message,
      code: error.code,
    };
  }
};

export const get_all = async (model: any, page: number, page_size: number) => {
  try {
    const response = await model
      .find({})
      .skip((page - 1) * page_size)
      .limit(page_size);
    console.log(response);
    return { data: response, code: 200 };
  } catch (error) {
    return {
      message: error.message,
      code: error.code,
    };
  }
};

export const filters = async (
  model: any,
  filter: any,
  page: number,
  page_size: number,
) => {
  try {
    const response = await model
      .find(filter)
      .skip((page - 1) * page_size)
      .limit(page_size);
    return { data: response, code: 200 };
  } catch (error) {
    return {
      message: error.message,
      code: error.code ?? 404,
    };
  }
};
