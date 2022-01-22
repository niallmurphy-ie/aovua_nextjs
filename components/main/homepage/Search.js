import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

const SearchSection = (props) => {
	const [startDate, setStartDate] = useState(new Date());
	const [startDates, setStartDates] = useState(new Date());

	const SubmitHandler = (e) => {
		e.preventDefault();
	};

	return (
		<div className={`wpo-select-section`}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="wpo-select-wrap">
							<div className="wpo-select-area">
								<form
									onSubmit={SubmitHandler}
									className="clearfix"
								>
									<div className="select-sub">
										<span>
											<i className="fi flaticon-calendar"></i>
											Check - In
										</span>
										<div className="form-group">
											<div id="filterDate">
												<div
													className="input-group date"
													data-date-format="dd.mm.yyyy"
												>
													<DatePicker
														selected={startDate}
														onChange={(date) =>
															setStartDate(date)
														}
													/>
													<div className="input-group-addon">
														<span className="ti-angle-down"></span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="select-sub">
										<span>
											<i className="fi flaticon-calendar"></i>
											Check - out
										</span>
										<div className="form-group">
											<div id="filterDate2">
												<div
													className="input-group date"
													data-date-format="dd.mm.yyyy"
												>
													<DatePicker
														selected={startDates}
														onChange={(date) =>
															setStartDates(date)
														}
													/>
													<div className="input-group-addon">
														<span className="ti-angle-down"></span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="select-sub">
										<span>
											{' '}
											<i className="fi flaticon-user"></i>{' '}
											Guests
										</span>
										<select className="select wide">
											<option>02</option>
											<option>01</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
										</select>
									</div>
									<div className="select-sub">
										<span>
											{' '}
											<i className="fi flaticon-user"></i>{' '}
											CHILDREN
										</span>
										<select className="select wide">
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
										</select>
									</div>
									<div className="select-sub">
										<button
											className="theme-btn-s2"
											type="submit"
										>
											Check Availability
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchSection;
