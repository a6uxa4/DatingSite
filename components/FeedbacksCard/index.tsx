"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";
import { IGetFeedback } from "@/common/feedbacks.interface";
import { StarRating } from "../Rating";

interface IProps {
  data: IGetFeedback;
}

export const FeedbackCard = ({ data }: IProps) => {
  return (
    <Card className="max-w-[340px] sm:max-w-[300px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={data.avatar} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {data.fullName}
            </h4>
            <StarRating rating={data.rating} />
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-2 text-small text-default-400 max-h-[150px]">
        <p>{data.feedback}</p>
      </CardBody>
    </Card>
  );
};
