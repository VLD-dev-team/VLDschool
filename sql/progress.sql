CREATE TABLE
  public.progress (
    "progressID" serial NOT NULL,
    "progressDate" timestamp without time zone NOT NULL DEFAULT now(),
    "progressType" character varying(255) NULL,
    "userID" character varying(255) NULL,
    "courseID" character varying(255) NULL,
    "progressScore" integer NOT NULL DEFAULT 0
  );

ALTER TABLE
  public.progress
ADD
  CONSTRAINT progress_pkey PRIMARY KEY (progressID)